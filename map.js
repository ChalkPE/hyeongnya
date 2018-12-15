module.exports = {
    h2y1: {
        '형': '양',
        '항': '먐',
        '핫': '냥',
        '흣': '굵',
        '흡': '꾹',
        '흑': '뺩',
    },
    h2y2: [
        [/혀(어*)엉(\.*)/gm, ['야', '오', '옹'], true],
        [/하(아*)앙(\.*)/gm, ['먀', '아', '암'], true],
        [/하(아*)앗(\.*)/gm, ['냐', '아', '앙'], true],
        [/흐(으*)읏(\.*)/gm, ['구', '루', '룱']],
        [/흐(으*)읍(\.*)/gm, ['꾸', '우', '욱']],
        [/흐(으*)윽(\.*)/gm, ['골', '골', '골']],
    ],
    y2h1: {
        '양': '형',
        '먐': '항',
        '냥': '핫',
        '굵': '흣',
        '꾹': '흡',
        '뺩': '흑',
    },
    y2h2: [
        [/야(오*)옹(\~*)/gm, ['혀', '어', '엉']],
        [/먀(아*)암(\~*)/gm, ['하', '아', '앙']],
        [/냐(아*)앙(\~*)/gm, ['하', '아', '앗']],
        [/구(루*)룱(\.*)/gm, ['흐', '으', '읏']],
        [/꾸(우*)욱(\.*)/gm, ['흐', '으', '읍']],
        [/골(골*)골(\.*)/gm, ['흐', '으', '윽']],
    ],
}