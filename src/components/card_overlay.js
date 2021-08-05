import classNames from 'classnames';

function CardOverlay({ className, children }) {
  return (
    <div className={classNames('absolute inset-px rounded-xl z-50 flex justify-center items-center', className)}>
      <div className="text-center">
        {children}
      </div>
    </div>
  );
}

export default CardOverlay;
