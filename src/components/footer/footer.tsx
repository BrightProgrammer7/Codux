import { st, classes } from './footer.st.css';
import stylableLogo from '../../assets/stylable.svg';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-footers-and-templates
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={st(classes.root, className)}>
            <p>Good Bye</p>
            <span>@Copywrite by AKHMIM </span>
            <img className={classes.icon} src={stylableLogo} width={15} height={15} alt="" />
        </div>
    );
};
