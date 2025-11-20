import { type HomepageProps } from '../model/homepage.types';

export function HomepageView({ version }: HomepageProps) {
  return (
    <main className={'flex h-screen flex-col items-center justify-center text-[2.5rem]'}>
      <h1>Hello world!</h1>
      ⌨️Happy coding🤓
      <span>{version}</span>
    </main>
  );
}
