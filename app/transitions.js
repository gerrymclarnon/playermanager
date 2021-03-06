export default function() {
    this.transition(
        this.fromRoute('login'),
        this.toRoute('loading'),
        this.use('crossFade'),
        this.reverse('crossFade')
    );

    this.transition(
        this.fromRoute(null),
        this.toRoute('loading'),
        this.use('crossFade'),
        this.reverse('crossFade')
    );

    this.transition(
        this.fromRoute('players'),
        this.toRoute('players.new'),
        this.use('toUp'),
        this.reverse('toDown')
    );

    this.transition(
        this.fromRoute('loading'),
        this.toRoute('players'),
        this.use('crossFade'),
        this.reverse('crossFade')
    );

    this.transition(
        this.fromRoute('players'),
        this.toRoute('player'),
        this.use('toLeft'),
        this.reverse('toRight')
    );

    this.transition(
        this.fromRoute('player'),
        this.toRoute('player.edit'),
        this.use('toUp'),
        this.reverse('toDown')
    );
}