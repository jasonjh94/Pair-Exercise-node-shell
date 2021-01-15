// const pwdFunc = process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();
//   const pwd = process.cwd();

//   if (cmd === 'pwd') {
//     process.stdout.write(pwd);
//     process.stdout.write('\nprompt >');
//   } else {
//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt >');
//   }
// });

module.exports = function pwd() {
  const pwd = process.cwd();
  process.stdout.write(pwd);
};
