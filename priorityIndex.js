class Notification {
    constructor(id, type, message, timestamp, read = false) {
        this.id = id;
        this.type = type;
        this.message = message;
        this.timestamp = timestamp;
        this.read = read;
    }
}

const PRIORITY = {
    placement: 3,
    result: 2,
    event: 1
};

function getTopNotifications(notifications, n = 10) {

    const unread = notifications.filter(
        noti => !noti.read
    );

    unread.sort((a, b) => {

        const priorityDiff =
            PRIORITY[b.type] - PRIORITY[a.type];

        if (priorityDiff !== 0) {
            return priorityDiff;
        }

        return b.timestamp - a.timestamp;
    });

    return unread.slice(0, n);
}

const notifications = [

    new Notification(
        1,
        "event",
        "Tech Fest starts tomorrow",
        new Date("2025-05-01T09:00:00")
    ),

    new Notification(
        2,
        "placement",
        "Google interview shortlist announced",
        new Date("2025-05-08T10:00:00")
    ),

    new Notification(
        3,
        "result",
        "Semester 6 results published",
        new Date("2025-05-07T18:00:00")
    ),

    new Notification(
        4,
        "placement",
        "Microsoft placement drive opened",
        new Date("2025-05-06T08:30:00")
    ),

    new Notification(
        5,
        "event",
        "Coding contest tonight",
        new Date("2025-05-08T12:00:00"),
        true
    ),

    new Notification(
        6,
        "result",
        "Internal marks updated",
        new Date("2025-05-08T11:00:00")
    )
];

const topNotifications =
    getTopNotifications(notifications, 10);

console.log("Priority Inbox:\n");

topNotifications.forEach((noti, index) => {

    console.log(
        `${index + 1}. [${noti.type.toUpperCase()}] ${noti.message}`
    );
});