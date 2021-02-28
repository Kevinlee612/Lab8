const formatVolumeIconPath = require('../assets/scripts/main');

describe('test formatVolumeIconPath() for /assets/scripts/main.js volume 0', () => {
    //volume 0 => icon 0
    test('volume is 0 => volume-level-0', () =>{
        expect(formatVolumeIconPath(0)).toMatch('volume-level-0')
    });
});

describe('test formatVolumeIconPath() for /assets/scripts/main.js volume 1', () => {
    //volume 1 => icon 1
    test('volume = 1 => volume-level-1', () => {
        expect(formatVolumeIconPath(1)).toMatch('volume-level-1')
    });

    //volume 33 => icon 1
    test('volume = 33 => volume-level-1', () => {
        expect(formatVolumeIconPath(33)).toMatch('volume-level-1')
    });
});

describe('test formatVolumeIconPath() for /assets/scripts/main.js volume 2', () => {
    //volume 34 => icon 2
    test('volume = 34 => volume-level-2', () => {
        expect(formatVolumeIconPath(34)).toMatch('volume-level-2')
    });

    //volume 66 => icon 2
    test('volume = 66 => volume-level-2', () => {
        expect(formatVolumeIconPath(66)).toMatch('volume-level-2')
    });
});

describe('test formatVolumeIconPath() for /assets/scripts/main.js volume 3', () => {
    //volume 67 => icon 3
    test('volume = 67 => volume-level-3', () => {
        expect(formatVolumeIconPath(67)).toMatch('volume-level-3')
    });

    //volume 100 => icon 3
    test('volume = 100 => volume-level-3', () => {
        expect(formatVolumeIconPath(100)).toMatch('volume-level-3')
    });
});
