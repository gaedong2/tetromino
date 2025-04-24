export interface KeyBindings {
    hard_drop: string;

    hold: string;

    left: string;

    right: string;

    rotate_left: string;

    rotate_right: string;

    soft_drop: string;
}

export const DEFAULT_KEY_BINDINGS: KeyBindings = {
    right: 'ArrowRight',
    left: 'ArrowLeft',
    rotate_left: 'ArrowUp',
    rotate_right: 'KeyZ',
    soft_drop: 'ArrowDown',
    hard_drop: 'Space',
    hold: 'KeyC'
};

export const KEY_BINDINGS: Array<keyof KeyBindings> = [
    'left',
    'right',
    'rotate_left',
    'rotate_right',
    'soft_drop',
    'hard_drop',
    'hold'
];

export const KEY_BINDING_LABELS: Record<keyof KeyBindings, string> = {
    left: '왼쪽이동',
    right: '오른쪽이동',
    rotate_left: '왼쪽회전',
    rotate_right: '오른쪽회전',
    soft_drop: '내리기',
    hard_drop: '빨리내리기',
    hold: '홀드'
};
