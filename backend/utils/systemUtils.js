const { exec } = require("child_process");
const { get } = require("http");

// Parse raw system info output into structured data
function parseMacInfo(raw) {
    const info = {};

    // 1. Parse OS
    if (raw.os) {
        // Example:
        // ProductName:	macOS
        // ProductVersion:	14.1.1
        // BuildVersion:	23B81
        const osLines = raw.os.split('\n');
        info.os = {
            productName: osLines[0]?.split(':\t')[1].trim() || 'N/A',
            productVersion: osLines[1]?.split(':\t')[1].trim() || 'N/A',
            buildVersion: osLines[2]?.split(':\t')[1].trim() || 'N/A',
        };
    }

    // 2. Parse CPU
    info.cpu = {
        model: raw.cpuModel || 'N/A',
        usage: {}
    };
    if (raw.cpuUsage) {
        // Example: "CPU usage: 6.89% user, 12.04% sys, 81.06% idle"
        const usageMatch = raw.cpuUsage.match(/(\d+\.\d+)% user, (\d+\.\d+)% sys, (\d+\.\d+)% idle/);
        if (usageMatch) {
            const user = parseFloat(usageMatch[1]);
            const sys = parseFloat(usageMatch[2]);
            const idle = parseFloat(usageMatch[3]);
            info.cpu.usage = {
                used: `${(user + sys).toFixed(2)}%`,
                user: `${user}%`,
                system: `${sys}%`,
                idle: `${idle}%`
            };
        }
    }
    
    // 3. Parse Memory
    info.memory = {
        total: 'N/A',
        used: 'N/A',
        free: 'N/A'
    };
    if (raw.memTotal) {
        // Example: "hw.memsize: 17179869184" (bytes)
        const totalBytes = parseInt(raw.memTotal.split(' ')[1]);
        if (!isNaN(totalBytes)) {
            info.memory.total = `${(totalBytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
        }
    }
    if (raw.memUsage) {
        // Example: "PhysMem: 15G used (1815M wired, 2047M compressor), 265M unused."
        const memMatch = raw.memUsage.match(/(\d+[GMK]B?) used.*, (\d+[GMK]B?) unused/);
        if (memMatch) {
            info.memory.used = memMatch[1];
            info.memory.free = memMatch[2];
            // Get the detailed breakdown
            const detailsMatch = raw.memUsage.match(/\(([^)]+)\)/);
            if(detailsMatch) {
                info.memory.details = detailsMatch[1];
            }
        }
    }

    // 4. Parse Disk (for the root filesystem "/")
    if (raw.diskUsage) {
        // Example:
        // Filesystem   Size   Used  Avail Capacity  Mounted on
        // /dev/disk1s1   466G   150G   300G    34%    /
        const diskLines = raw.diskUsage.split('\n');
        if (diskLines.length > 1) {
            const parts = diskLines[1].trim().split(/\s+/); // Split on one or more spaces
            info.disk = {
                filesystem: parts[0],
                total: parts[1],
                used: parts[2],
                available: parts[3],
                capacity: parts[4],
                mountPoint: parts[5]
            };
        }
    }

    return info;
}

// gives the details about the system info of the host machine
// with the information like cpu , memory , os with how much resource is used with the total resource
function getSystemInfo(callback) {
    const commands = {
        os: 'sw_vers', // Get OS info
        cpuModel: 'sysctl -n machdep.cpu.brand_string', // Get CPU model
        cpuUsage: 'top -l 1 | grep "CPU usage"', // Get CPU usage stats
        memTotal: 'sysctl hw.memsize', // Get total physical RAM
        memUsage: 'top -l 1 | grep PhysMem', // Get used/free RAM
        diskUsage: 'df -h /' // Get disk usage for the root drive
    };

    const Promises = Object.entries(commands).map(([key, cmd]) => {
        return new Promise((resolve, reject) => {
            exec(cmd, (error, stdout, stderr) => {
                if (error) {
                    return reject(`Error executing ${cmd}: ${stderr}`);
                }
                resolve([key, stdout.trim()]);
            });
        });
    });

    Promise.all(Promises)
        .then(results => {
            const info = {};
            results.forEach(([key, output]) => {
                info[key] = output;
            });
            const parsedInfo = parseMacInfo(info);
            callback(null, parsedInfo);
        })
        .catch(err => {
            callback(err);
        });
}

// return if docker is installed the version else error
function checkDockerInstalled(callback) {
    exec("docker --version", (error, stdout, stderr) => {
        if (error) {
            return callback(new Error("Docker is not installed or not found in PATH."));
        }
        return callback(null, stdout.trim());
    });
}

// return if docker is running else errore
function checkDockerRunning(callback) {
    exec("docker info", (error, stdout, stderr) => {
        if (error) {
            return callback(new Error("Docker is not running. Please start Docker."));
        }
        return callback(null, "Docker is running.");
    });
}

// check if minio is running
function checkMinioRunning(callback) {
    

}

module.exports = {
    getSystemInfo,
    checkDockerInstalled,
    checkDockerRunning
};