import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faGit, faLaravel, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

type BadgeProps = {
  icon?: string | JSX.Element;
  text: string;
  className?: string;
};

export function Badge({ icon, text, className }: BadgeProps) {
  return (
    <span className={`${className}`}>
      {typeof icon === 'string' ? (
        <FontAwesomeIcon icon={
          icon === 'faReact' ? faReact :
          icon === 'faJs' ? faJs :
          icon === 'faDatabase' ? faDatabase :
          icon === 'faGit' ? faGit :
          icon === 'faLaravel' ? faLaravel :
          icon === 'faPhp' ? faPhp : faPhp 
        } className="mr-1" />
      ) : (
        icon
      )}
      {text}
    </span>
  );
}
