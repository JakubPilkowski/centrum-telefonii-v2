import clsx from "clsx";
import ActionButton from "components/ActionButton";
import useNavigate from "hooks/useNavigate";

import buttonSlide from "styles/ButtonSlide.module.css";

const Actions = ({ isVisible }: Props) => {
  const [navigate] = useNavigate();

  const handleNavigate = (id: string) => () => {
    navigate(id);
  };

  return (
    <>
      <ActionButton
        component="a"
        href="tel:+48 (89)533-71-32"
        iconType="call"
        aria-hidden="true"
        tabIndex={-1}
        isFloating
        className={clsx(
          buttonSlide.slide,
          buttonSlide.slideOut,
          isVisible && buttonSlide.slideIn
        )}
      />
      <ActionButton
        component="button"
        onClick={handleNavigate("map")}
        iconType="direction"
        aria-hidden="true"
        tabIndex={-1}
        isFloating
        className={clsx(
          buttonSlide.slide,
          buttonSlide.slideOut,
          isVisible && buttonSlide.slideIn
        )}
      />
      <ActionButton
        component="a"
        href="https://www.google.com/search?q=centrum+telefonii&client=firefox-b-d&sxsrf=ALeKk01XaB92F7V-cOmIS2_BORlHsMkHMg%3A1627138495065&ei=vyn8YOfCA8SGwPAP-pmNgAM&oq=centrum+telefonii&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELADECcyBwgjELADECcyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsANKBAhBGABQAFgAYKqHBGgBcAJ4AIABP4gBP5IBATGYAQCqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz&ved=0ahUKEwinnv6f-_vxAhVEAxAIHfpMAzAQ4dUDCA4&uact=5"
        iconType="opinion"
        aria-hidden="true"
        tabIndex={-1}
        isFloating
        className={clsx(
          buttonSlide.slide,
          buttonSlide.slideOut,
          isVisible && buttonSlide.slideIn
        )}
      />
    </>
  );
};

type Props = {
  isVisible: boolean;
};

export default Actions;
