function select()
{
    if (data.film.value != null && data.time.value != null) 
    {
        document.getElementById(1).innerText = data.name.value + "\n" + data.film.value + " " + data.time.value + "\n" + "Time of purchase: " + new Date().toLocaleString();
    }
}