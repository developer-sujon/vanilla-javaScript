(function () {
    const disitalClock = () => {
        const date = new Date()
        const houre = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const session = houre >= 12 ? 'pm' : 'am'

        const formatTwelveHoure = houre > 12 ? houre -12 : houre
        const formatHoure = formatTwelveHoure < 10 ? '0'+ formatTwelveHoure : formatTwelveHoure
        const formatMinutes = minutes < 10 ? '0'+ minutes : minutes
        const formatSeconds = seconds < 10 ? '0'+ seconds : seconds

        const displayHoure = document.getElementById('houre').textContent = `${formatHoure}:`
        const displayMinutes = document.getElementById('minutes').textContent = `${formatMinutes}:`
        const displaySecond = document.getElementById('second').textContent = `${formatSeconds}`
        const displaysession = document.getElementById('session').textContent = `${session}`

        setTimeout(disitalClock, 1000);
    }

   
    disitalClock()
})()