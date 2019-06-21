const style = document.createElement("style");
style.id = 'layout-style-block';
document.head.appendChild(style);

const parse = argNode => {
    if (Number.isNaN(argNode.value))
        return argNode.value;
    return argNode.value + 'mm';
};

const marginFormaters = {
    all: (value) => { style.sheet.insertRule(`.sheet { padding: ${value} }`) },
    left: (value) => { style.sheet.insertRule(`.sheet { padding-left: ${value} }`) },
    top: (value) => { style.sheet.insertRule(`.sheet { padding-top: ${value} }`) },
    right: (value) => { style.sheet.insertRule(`.sheet { padding-right: ${value} }`) },
    bottom: (value) => { style.sheet.insertRule(`.sheet { padding-bottom: ${value} }`) },
    vertical: (value) => { style.sheet.insertRule(`.sheet { padding-top: ${value}; padding-bottom: ${value} }`) },
    horizontal: (value) => { style.sheet.insertRule(`.sheet { padding-left: ${value}; padding-right: ${value} }`) },
    'head-separator': (value) => { style.sheet.insertRule(`header { margin-bottom: ${value}`) },
    'foot-skip': (value) => { style.sheet.insertRule(`footer { margin-top: ${value}`) },
};

nxtx.registerCommand('set-margin', (dictNode) => {
    Object.keys(dictNode).forEach(key => marginFormaters[key](parse(dictNode[key])));
});

nxtx.registerCommand('set-footer', (height) => {
    style.sheet.insertRule(`footer {height: ${height}mm`);
});

nxtx.registerCommand('set-header', (height) => {
    style.sheet.insertRule(`header {height: ${height}mm`);
});

nxtx.registerCommand('set-paper', (paper) => {
    style.sheet.insertRule(`@page { size: ${paper} }`);
});

// Default
style.sheet.insertRule('@page { size: A4 }');
style.sheet.insertRule(`.sheet { padding: 2cm }`);
style.sheet.insertRule('footer { height: 3cm }');
style.sheet.insertRule('header { height: 3cm }');
