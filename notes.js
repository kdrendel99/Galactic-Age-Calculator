calculateAge(birthMonth,birthDay,birthYear)
{
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year - birthYear;

    if ( today_month < (birthMonth - 1))
    {
        age--;
    }
    if (((birthMonth - 1) == today_month) && (today_day < birthDay))
    {
        age--;
    }
    return age;