import { st, classes } from './footer.st.css';

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
            <tfoot about=""><p> Good Bye</p></tfoot>
            <span>Copywrite by AKHMIM</span>
            
        </div>
    );
};
