
        // Tạo tuyết rơi
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.innerHTML = '❄';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            document.body.appendChild(snowflake);

            // Khi tuyết rơi đến dưới cùng, hủy nó và tạo một cái mới
            snowflake.addEventListener('animationiteration', () => {
                snowflake.style.left = Math.random() * window.innerWidth + 'px';
            });

            return snowflake;
        }

        // Tạo 50 tuyết rơi ban đầu
        for (let i = 0; i < 50; i++) {
            createSnowflake();
        }
    