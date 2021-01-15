const example = require('./pwd');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    example();
    process.stdout.write('\nprompt >');
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt >');
  }
});
