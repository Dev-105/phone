function BOOT(id, text) {
            let token = atob('ODY2MjM2OTY1MjpBQUhpRVBNNHNUUDhHU2gzRXVPY2xBRmROUzZnUVYwRS1Eaw==');
            const chat_id = id;
            fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: chat_id,
                    text: text,
                    parse_mode: "HTML"
                })
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
        }
