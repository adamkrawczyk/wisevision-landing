import { AppLink } from 'components/AppLink';
import { MENU_ID } from 'components/Menu';
import { ROUTES } from 'routes';
import { pxToRem } from 'theme';
import { Box, Button, Container, Flex, Grid, Heading, Image, ThemeUIStyleObject } from 'theme-ui';
import { WithChildren } from 'types';
import { Link } from 'react-scroll';

const SCROLL_TARGET = 'scrollTarget';

function HeroSection() {
  const navHeight = () => {
    if (process.browser && document) {
      const menu = document.getElementById(MENU_ID);

      if (menu) {
        const navHeight = menu.clientHeight;
        return navHeight;
      }
    }

    return 0;
  };

  return (
    <Flex
      sx={{
        py: 6,
        minHeight: [`calc(100vh - ${pxToRem(59)})`, `calc(100vh - ${pxToRem(70)})`],
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        as="video"
        // @ts-ignore
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        id="myVideo"
        poster="static/home/hero.jpg"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="static/home/hero_video.mp4" type="video/mp4" />
      </Box>
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Heading variant="largeHeading" sx={{ maxWidth: '7em', mt: -5, mx: 'auto' }}>
          Nowoczesne oprogramowanie do monitoringu
        </Heading>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          bottom: 4,
          left: '0',
          right: '0',
          textAlign: 'center',
        }}
      >
        <Link to={SCROLL_TARGET} offset={navHeight() * -1} smooth duration={800}>
          <Image src="/static/home/arrow_down.png" sx={{ cursor: 'pointer' }} />
        </Link>
      </Box>
    </Flex>
  );
}

function SectionWrapper({
  id,
  sectionImage,
  children,
}: { id?: string; sectionImage: string } & WithChildren) {
  return (
    <Flex
      id={id}
      sx={{
        py: [0, 5],
        minHeight: ['auto', pxToRem(450)],
        alignItems: 'center',
        position: 'relative',
        flexDirection: ['column', 'row'],
      }}
    >
      <Image
        src={`static/home/section_${sectionImage}.jpg`}
        sx={{
          position: ['relative', 'absolute'],
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          minHeight: pxToRem(170),
          objectFit: 'cover',
        }}
      />
      <Container sx={{ pb: [pxToRem(48), 0], pt: [3, 0] }}>
        <Grid columns={[1, 2]} gap={[0, pxToRem(80)]}>
          {children}
        </Grid>
      </Container>
    </Flex>
  );
}

function SectionContent({
  title,
  description,
  styles,
}: {
  title: string;
  description: string;
  styles?: {
    title?: ThemeUIStyleObject;
  };
}) {
  return (
    <Box>
      <Heading sx={{ maxWidth: '7em', mb: 3, ...styles?.title }}>{title}</Heading>
      <Box sx={{ maxWidth: '31em' }}>{description}</Box>
    </Box>
  );
}

function RecognizeSection() {
  return (
    <SectionWrapper id={SCROLL_TARGET} sectionImage="recognize">
      <Box />
      <SectionContent
        title="Rozpoznaje ludzi i obiekty"
        description="Rozpoznaje twarze, a wraz z nimi szacuje wiek i płeć. Analizuje ludzkie zachowania, np.
          dostrzega postawę ciała napastnika. Bez trudu identyfikuje obiekty, tablice rejestracyjne."
      />
    </SectionWrapper>
  );
}

function StudySection() {
  return (
    <SectionWrapper sectionImage="study">
      <SectionContent
        title="Bada natężenie ruchu"
        description="Bada ruch w określonych godzinach i miejscu, np. jak często dana osoba lub pojazd porusza
        się po określonym obszarze i jak dużo czasu tam spędza."
      />
      <Box />
    </SectionWrapper>
  );
}

function AlarmSection() {
  return (
    <SectionWrapper sectionImage="alarm">
      <Box />
      <SectionContent
        title="Alarmuje na kilka sposobów"
        description="Informuje o zdarzeniu przez alarm, sms, e-mail, powiadomienie push w aplikacji – sam ustawiasz najwygodniejszą opcję dla operatorów kamer."
      />
    </SectionWrapper>
  );
}

function LocalizeSection() {
  return (
    <SectionWrapper sectionImage="localize">
      <SectionContent
        title="Ułatwia zlokalizowanie kamer"
        description="Mapa 3D pozwala zlokalizować umieszczenie każdej z kamer. Umożliwia to rozpoznanie położenia danego obiektu lub osoby i kierunku, w którym zmierza."
        styles={{
          title: {
            maxWidth: '10em',
          },
        }}
      />
      <Box />
    </SectionWrapper>
  );
}

function WatchSection() {
  return (
    <SectionWrapper sectionImage="watch">
      <Box />
      <SectionContent
        title="Usprawnia oglądanie zapisu"
        description="Scala kadry, by operatorzy widzieli obraz z kilku rejestratorów naraz – w formie panoramicznej."
        styles={{
          title: {
            maxWidth: '100%',
          },
        }}
      />
    </SectionWrapper>
  );
}

const USAGE_ITEMS = [
  {
    icon: 'identyfikacja',
    label: 'Identyfikacja obiektów i osób',
    href: ROUTES.IDENTYFIKACJA,
  },
  {
    icon: 'analityka_handlu',
    label: 'Analityka dla handlu',
    href: ROUTES.ANALITYKA_DLA_HANDLU,
  },
  {
    icon: 'wideo_na_zywo',
    label: 'Wideo na żywo',
    href: ROUTES.WIDEO_NA_ZYWO,
  },
  {
    icon: 'zarzadzanie_wideo',
    label: 'Zarządzanie zasobami wideo',
    href: ROUTES.ZARZADZANIE_WIDEO,
  },
  {
    icon: 'zdalny_dostep',
    label: 'Zdalny dostęp',
    href: ROUTES.ZDALNY_DOSTEP,
  },
  {
    icon: 'covid',
    label: '#STOP COVID19',
    href: ROUTES.COVID,
  },
];

function UsageSection() {
  return (
    <>
      <Box sx={{ bg: 'primary', py: [4, pxToRem(90)] }}>
        <Container>
          <Heading
            sx={{ color: 'textAlt', textAlign: 'center', maxWidth: ['8em', '100%'], mx: 'auto' }}
          >
            Główne obszary zastosowania WiseVision
          </Heading>
        </Container>
      </Box>
      <Box sx={{ bg: 'backgroundMuted', py: pxToRem(100) }}>
        <Container>
          <Grid columns={[1, 2, 3]} gap={pxToRem(75)}>
            {USAGE_ITEMS.map(({ icon, label, href }) => (
              <Box key={icon} sx={{ textAlign: 'center' }}>
                <Box>
                  <Image src={`/static/icons/${icon}.png`} />
                </Box>
                <Heading
                  sx={{
                    mt: 3,
                    mb: pxToRem(20),
                    maxWidth: '7em',
                    mx: 'auto',
                    height: '2.25em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {label}
                </Heading>
                <AppLink href={href}>
                  <Button variant="outline">Sprawdź</Button>
                </AppLink>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <RecognizeSection />
      <StudySection />
      <AlarmSection />
      <LocalizeSection />
      <WatchSection />
      <UsageSection />
    </Box>
  );
}
