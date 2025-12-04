export const schedule = [
    // Dec 07
    [
        { time: '09:00 - 10:00', event: 'Registration', chair: '', type: 'misc' },
        { time: '10:00 - 10:45', event: 'Inauguration', chair: '', type: 'misc' },
        { time: '10:45 - 11:45', event: 'Talk 1: "Some Recent Issues in Cryptology" by Prof. Bimal Kumar Roy', chair: 'Prof. Dipanwita Roy Chowdhury', type: 'misc' },
        { time: '11:45 - 12:00', event: 'Snacks & Tea', chair: '', type: 'snacks' },
        { time: '12:00 - 13:00', event: 'Talk 1: "Some Recent Issues in Cryptology" by Prof. Bimal Kumar Roy (contd.)', chair: 'Prof. Dipanwita Roy Chowdhury', type: 'misc' },
        { time: '13:00 - 14:00', event: 'Lunch', chair: '', type: 'lunch' },
        { time: '14:00 - 15:00', event: 'Talk 2: Prof. Dipanwita Roy Chowdhury', chair: 'Dr Souradyuti Paul ', type: 'misc' },
        { time: '15:00 - 15:15', event: 'Tea/Coffee', chair: '', type: 'snacks' },
        { time: '15:15 - 16:15', event: 'Talk 2 (contd.)', chair: 'Dr Souradyuti Paul', type: 'misc' },
        { time: '16:15 - 17:15', event: 'Talk 3: "Differential Cryptanalysis of ARM\'s Pointer Authentication Code" by Dr Shibam Ghosh', chair: 'Dr Souradyuti Paul', type: 'talk' },
        { time: '17:15 - 17:30', event: 'Snacks & Tea', chair: '', type: 'snacks' },
        { time: '17:30 - 18:30', event: 'Lightning Talks', chair: '', type: 'misc' },
    ],
    // Dec 08
    [
        { time: '09:30 - 10:30', event: 'Talk 4: "Zero Knowledge Proof and its Application" by Dr Avijit Dutta', chair: 'Dr Sabyasachi Karati', type: 'talk' },
        { time: '10:30 - 11:30', event: 'Talk 5: "Key Committing Attacks against AES-based AEAD Schemes" by Dr Mostafizar Rahman', chair: 'Dr Sabyasachi Karati', type: 'talk' },
        { time: '11:30 - 12:00', event: 'Snacks & Tea', chair: '', type: 'snacks' },
        { time: '12:00 - 13:00', event: 'Talk 6: "Security and Privacy in Machine Learning" by Dr Nishanth Chandran', chair: 'Dr Dhiman Saha', type: 'talk' },
        { time: '13:00 - 14:00', event: 'Lunch', chair: '', type: 'lunch' },
        { time: '14:00 - 15:00', event: 'Talk 7: "Post-Quantum Digital Signatures from Hash Functions" by Dr Sabyasachi Karati', chair: 'Dr R Kabaleeshwaran', type: 'talk' },
        { time: '15:00 - 15:30', event: 'Session by IIT Bhilai Innovation and Technology Foundation CEO Mr. Prashant Mathur', chair: 'Dr R Kabaleeshwaran', type: 'misc' },
        { time: '15:30 - 16:30', event: 'Poster Session', chair: '', type: 'misc' },
        { time: '16:30 - 17:00', event: 'Snacks & Tea', chair: '', type: 'snacks' },
        { time: '17:00 - 18:00', event: 'Talk 8: by Dr Raghvendra Singh Rohit', chair: 'Dr Subidh Ali', type: 'talk' },
    ],
    // Dec 09
    [
        { time: '09:30 - 10:30', event: 'Talk 9: "Exploring Application of Machine Learning in Cryptology" by Dr Girish Mishra', chair: 'Dr Avik Chakraborti', type: 'talk' },
        { time: '10:30 - 11:30', event: 'Talk 10: "Unclonability in Cryptography: Quantum Credentials" by Dr M. Prem Laxman Das', chair: 'Dr Avik Chakraborti', type: 'talk' },
        { time: '11:30 - 11:50', event: 'Snacks & Tea', chair: '', type: 'snacks' },
        { time: '11:50 - 12:50', event: 'Talk 11: Prof. Goutam Kumar Paul', chair: 'Dr M. Prem Laxman Das', type: 'talk' },
        { time: '12:50 - 13:45', event: 'Panel Discussion', chair: '', type: 'misc' },
        { time: '13:45 - 14:00', event: 'Valedictory Session', chair: '', type: 'misc' },
        { time: '14:00 - 15:00', event: 'Lunch', chair: '', type: 'lunch' },
        { time: '15:00 - 18:30', event: 'CWS 2025', chair: '', type: 'nwc' },
    ],
];

export const getCurrentEvent = () => {
    const now = new Date();
    const year = 2025;
    const month = 11; // December is month 11 (0-indexed)
    const days = [7, 8, 9];
    // const days = [4, 5, 6];

    // For testing purposes, if the current date is not in the range, we can mock it or return null.
    // However, the user wants to see it working now (Dec 4th).
    // So I will add a logic: if today is NOT one of the event days, 
    // check if we are "simulating" the event start (which we are, by setting countdown to now).
    // But strictly speaking, the schedule is for Dec 7-9.
    // If I want to show "Live" right now (Dec 4), I might need to fake the date check or just return the first event if testing.
    // BUT, the user said "when it reaches the 00 00 00 00 counter... replaced with program updates".
    // The user also set the countdown to Dec 4th 13:00 (which is in the future relative to 12:27).
    // So when it hits 13:00 today, it should show... what?
    // The schedule is for Dec 7.
    // If I strictly follow the schedule, nothing is live on Dec 4.
    // I should probably map the current time to the schedule time for demo purposes, OR just show "No active session" if strictly following dates.
    // Let's assume for the "Live Representation" request, if the countdown is done, we show the *next* upcoming event or the *current* event if we were in that time.

    // Actually, the user probably wants to see the UI change.
    // I will implement strict checking first. If it returns null, I'll handle that in the UI (maybe show "Workshop hasn't started yet" or "See full program").
    // Wait, if the countdown ends today (Dec 4), and the event is Dec 7, technically the countdown shouldn't end today.
    // The user changed the countdown target to Dec 4 13:00 for TESTING.
    // So they expect to see the "Live" UI.
    // If I return null, the UI might look empty.
    // I will add a "debug" mode or just loosen the date check for the demo?
    // Or better, I will check if `now` matches the *time* of any event, ignoring the day, if we are in "demo" mode?
    // No, that's too complex.

    // Let's stick to strict date checking.
    // If `getCurrentEvent` returns null, the Home page can display "Workshop is Live! Check the program for details." 
    // or I can find the *next* event.

    // Let's try to find the event that *would* be happening if today was one of the workshop days, 
    // OR just return the first event of Day 1 if we are testing and nothing matches.
    // Let's just implement strict logic first.

    for (let i = 0; i < days.length; i++) {
        const day = days[i];
        // Check if today matches the schedule day
        if (now.getDate() === day && now.getMonth() === month && now.getFullYear() === year) {
            const daySchedule = schedule[i];
            for (const event of daySchedule) {
                const [start, end] = event.time.split(' - ');
                const [startHour, startMin] = start.split(':').map(Number);
                const [endHour, endMin] = end.split(':').map(Number);

                const startTime = new Date(year, month, day, startHour, startMin);
                const endTime = new Date(year, month, day, endHour, endMin);

                if (now >= startTime && now < endTime) {
                    return { ...event, day: `Dec 0${day}` };
                }
            }
        }
    }

    return null;
};
