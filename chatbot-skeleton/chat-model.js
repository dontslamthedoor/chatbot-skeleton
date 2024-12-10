const form = document.getElementById('chat-form');
        const responseText = document.getElementById('response-text');

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const prompt = document.getElementById('user-prompt').value;

    
            responseText.textContent = 'Loading...';

            try {
                const apiKey = '';

                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo', 
                        messages: [{ role: 'user', content: prompt }],
                    }),
                });

                if (!response.ok) {
                    throw new Error('Error with API request');
                }

                const data = await response.json();
                const answer = data.choices[0].message.content;
                responseText.textContent = answer;
            } catch (error) {
                console.error('Error:', error);
                responseText.textContent = 'An error occurred. Please try again later.';
            }
        });