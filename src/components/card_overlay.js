import classNames from 'classnames';

function CardOverlay({ className, children }) {
  return (
    <div className={classNames('absolute top-0 left-0 w-full h-full rounded-xl bg-opacity-80 z-50 flex justify-center items-center', className)}>
      <div className="text-center">
        {children}
      </div>
    </div>
  );
}

export default CardOverlay;