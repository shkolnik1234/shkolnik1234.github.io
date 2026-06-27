let creators_cards = document.querySelector('.creators_cards');
let creators_links = ['https://learn.algoritmika.org/student-profile?profileId=70535273', 'https://learn.algoritmika.org/student-profile?profileId=70584374', 'https://learn.algoritmika.org/student-profile?profileId=3469452']
let creators_avatars = creators_cards.querySelectorAll('img');

for (let i = 0; i < creators_avatars.length; i++) {
    creators_avatars[i].addEventListener('click', function () {
        location.assign(creators_links[i]);
    })
}