export default function() {
    this.transition(
        this.fromRoute('players'),
        this.toRoute('player'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
}