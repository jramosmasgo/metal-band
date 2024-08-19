import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactPhotoCollage } from 'react-photo-collage';

const GallerySection: React.FC = () => {
    const [t] = useTranslation();

    const setting = {
        width: '90%', // Se ajusta al 100% del contenedor
        height: ['300px', '350px', '350px'], // Diferentes alturas para diferentes filas
        layout: [1, 3, 2], // Se cambió el layout para ser más flexible en pantallas pequeñas
        photos: [
            { source: 'https://scontent.fjau3-1.fna.fbcdn.net/v/t39.30808-6/425787998_122122006694173827_1524608604962366929_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=V6ilHv01_d8Q7kNvgFnqQWn&_nc_ht=scontent.fjau3-1.fna&oh=00_AYAdlnYH0Bqm2SGWevgc0JV-Fnzar2osAZUn9E6SwEWBvA&oe=66C9710E' },
            { source: 'https://scontent.fjau3-1.fna.fbcdn.net/v/t39.30808-6/448654599_122156765588173827_6277617817409567066_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lPkid7pisT4Q7kNvgF9KPmv&_nc_ht=scontent.fjau3-1.fna&oh=00_AYCYCIl9AMUOq1O4DBERF7upDW1KipIJlSL564B11YTgvg&oe=66C97239' },
            { source: 'https://scontent.fjau3-1.fna.fbcdn.net/v/t39.30808-6/425768011_122122006676173827_2726022710916000861_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BL8C3RSbR2oQ7kNvgGCQNSm&_nc_ht=scontent.fjau3-1.fna&oh=00_AYDHEmSQqPBQS2PYVi5PIyRb3crxIB_mv2how1Q7_fgnsg&oe=66C99A05' },
            { source: 'https://scontent.fjau3-1.fna.fbcdn.net/v/t39.30808-6/426295037_122122006526173827_8534510889047344959_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fAxvjEIcjuMQ7kNvgHUgh0V&_nc_ht=scontent.fjau3-1.fna&oh=00_AYAmqNXz0G3nom2MzqEAbn8fkNLLEikzhWzDRwpgus0Rlw&oe=66C9958E' },
            { source: 'https://scontent.fjau3-1.fna.fbcdn.net/v/t39.30808-6/425749595_122122006460173827_1338153117880511283_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z6Ri-_kCUsEQ7kNvgGjL55s&_nc_ht=scontent.fjau3-1.fna&_nc_gid=AZZmkz9bm4uNRImpN5X-vlu&oh=00_AYC0igO2iSEd1oU9Spc9fI_SZgALVdg8A1dqGUWeVsSTxA&oe=66C97DD2' },
            { source: 'https://scontent.fjau3-1.fna.fbcdn.net/v/t39.30808-6/426274388_122122006328173827_2436051320750171496_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ndP5DVUkqBoQ7kNvgHnZK5i&_nc_ht=scontent.fjau3-1.fna&oh=00_AYDUoKH3G1N5LbsPHXjbTSLO83OkKmyLCr9dOHhdgFsBHw&oe=66C98CE9' },
        ],
        showNumOfRemainingPhotos: true
    };

    return (
        <div>
            {/* <div className='w-full bg-yellow-500 h-[20px]'></div> */}
            <div className='w-full bg-banner-products md:py-20 py-10 flex items-center justify-center flex-col md:gap-12 gap-0 '>
                <h1 className='my-10 md:my-0 font-viking text-yellow-400 text-4xl md:text-6xl text-center'>
                    {t("home.gallery.title")}
                </h1>
                <div className='flex w-full md:w-3/5 items-center justify-center px-4 md:px-0'>
                    <ReactPhotoCollage {...setting} />
                </div>
            </div>
        </div>
    );
}

export default GallerySection;
