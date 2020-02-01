const Sounds = {
    MESSAGE: assets('media/message.mp3'),
    PAY_COINS: assets('media/cashier-bill.mp3'),
    COLLECT_COINS: assets('media/coins-spill.mp3'),
    NOTIFICATIONS: assets('media/notifications.mp3'),
    NOT_ENOUGH_GOLD: assets('media/not-enough-gold.mp3'),
    MORE_GOLD_NEEDED: assets('media/more-gold-needed.mp3'),
    REWARD_NOTIFICATION: assets('media/reward-notification.mp3'),
    NOT_ENOUGH_GOLD_RANDOM() {
        return Array.random([Sounds.NOT_ENOUGH_GOLD, Sounds.MORE_GOLD_NEEDED]);
    }
};

/**
 * Play the given audio sound in background
 * 
 * @param   {string} url
 * @returns void
 */
function playAudio(url) {
    // var audio = new Audio(url);
    // audio.play();

    var sound = new Howl({
        src: [url]
    });

    sound.play();
}
