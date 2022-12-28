import localFont from '@next/font/local';
import classnames from 'classnames';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CircularXXFont = localFont({
  src: [
    {
      path: './CircularXXSub-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './CircularXXSub-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './CircularXXWeb-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './CircularXXWeb-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ]
});

export default function Page({ children }: Props) {
  return (
    <main className={classnames("container mx-auto p-4 tracking-tight text-primary", CircularXXFont.className)}>{children}</main>
  )
}