export default function() {
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