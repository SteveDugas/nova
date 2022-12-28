import classnames from 'classnames';

interface Props {
  children: JSX.Element | JSX.Element[];
  open?: boolean;
  onDismiss: () => void;
}

export default function Popup({ children, open=false, onDismiss }: Props) {
  let extraClasses = open ? 'block' : 'hidden';

  return (
    <>
      <div className="absolute top-0 right-0">
        <div className={classnames("rounded-xl bg-white shadow-light p-5", extraClasses)}>
          {children}
        </div>
      </div>
      { open && 
        <div className="w-full h-full fixed inset-0" onClick={onDismiss} />
      }
    </>
  )
}