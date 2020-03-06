let screens = [
    'orig_warning',
    'advanced_screen',
    'option1',
    'option2',
    'option3',
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

function end()
{
    displayScreen("none");
    alert('Thank you!');
}

$(() => { displayScreen(screens[0]); });

$('#advanced_button').click(() => { displayScreen('advanced_screen'); });
$('#op1_button').click(() => { displayScreen('option1'); });
$('#op2_button').click(() => { displayScreen('option2'); });
$('#op3_button').click(() => { displayScreen('option3'); });
