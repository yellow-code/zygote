export const _cs = (args: (string | undefined)[]) =>
  args.filter(a => !!a).join(' ');
