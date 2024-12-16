// material-ui
import { useTheme } from '@mui/material/styles';
import logoDark from 'assets/images/logoWik.png';
import logo from 'assets/images/logoWik.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain() {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="icon logo" width="100" />
     *
     */
    <>
      <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="icon logo" width="60" />
    </>
  );
}
