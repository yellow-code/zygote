export const _cs = (args: (string | undefined)[]) =>
  args.filter(a => !!a).join(' ');


export const getPre = (tag: string) => {
  if (tag === '') {
    return '';
  }
  else {
    return '\n  ';
  }
};
