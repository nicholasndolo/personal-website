const currentTime =() => {
  const timeElement = document.getElementById('current-time');
  const dayElement = document.getElementById('current-day')
  const now = new Date();

   // Get UTC day of the week
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

   const today = days[now.getUTCDay()];

  
  // Get UTC time in HH:MM format
  const hours = now.getUTCHours().toString().padStart(2, '0');
  const minutes = now.getUTCMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes} UTC`;
  dayElement.textContent = `${today}`
  timeElement.textContent = ` ${time}`;
}

// Update the time immediately and then every minute
currentTime();
setInterval(updateTime, 60000);
