import './scss/index.scss';

async function test() {
  return await Promise.resolve(1).then(console.log);
}

test();
console.log('working!!!!!!');
