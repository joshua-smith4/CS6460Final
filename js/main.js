let screens = [
    'orig_warning',
    'advanced_screen'
];

function displayScreen(screen)
{
    for(let i = 0; i < screens.length; i++)
    {
        if(screen === screens[i])
        {
            $('#'+screens[i]).show();
        }
        else
        {
            $('#'+screens[i]).hide();
        }
    }
}

$(() => { displayScreen(screens[0]); });

$('#advanced_button').click(() => 
    {
        displayScreen('advanced_screen');
    }
);
