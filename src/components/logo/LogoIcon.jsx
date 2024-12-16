// material-ui
import { useTheme } from '@mui/material/styles';
import logoDark from 'assets/images/logoWik.png';
import logo from 'assets/images/logoWik.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //

export default function LogoIcon() {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoIconDark : logoIcon} alt="icon logo" width="100" />
     *
    //  */
    <>
      <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="icon logo" width="60" />
    </>
  );
}
