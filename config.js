// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "Salle des fêtes mon rêve",
    bio: "salle des fêtes",
    profileImage: "https://scontent.falg6-1.fna.fbcdn.net/v/t39.30808-6/274787205_109323758357327_3006421921504063854_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEvhm7yjwgHMwyltCELz6pJlg-RGJpSyayWD5EYmlLJrJQCzmp9cwGxQhCYL2JkSaLYduI8u0T0F82ltZfx3Qc7&_nc_ohc=AefKEz5W51QQ7kNvwFI7J2x&_nc_oc=Adn4uXMpS2-_8FKobjYpcIIUtj-uILyrFOgPKn1poJFyl86gFGKixtpHxQkeg0lh6DY&_nc_zt=23&_nc_ht=scontent.falg6-1.fna&_nc_gid=zsLsf5olZ3ySQuk3qxGvgQ&oh=00_AflwQ0hB2_byuMSXkJ5wDGtSHat_oiZNBTU1ElDEFDppNg&oe=695AF263",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "https://www.facebook.com/profile.php?id=100078456203021",
        instagram: "https://www.instagram.com/salle.des.fetes.mon.reve/",
        tiktok: "https://www.tiktok.com/@chebkhaled?is_from_webapp=1&sender_device=pc",
        whatsapp: "+213558137098",
        telegram: "+213 562 33 14 08",
        linkedin: "daisyparkhouse",
        snapchat: "https://www.snapchat.com/@sheikh_tidiane?sender_web_id=792b2a4d-05d3-4e8f-a5e0-1aeb89eba722&device_type=desktop&is_copy_url=true",
        email: "pubcom.alger@gmail.com",
        website: "https://www.youtube.com/",
        maps: "https://maps.app.goo.gl/FSSFd7eXbY8uBFAa7?g_st=aw",
        phone: "+213550416232"
    },
    






    // Activation des icônes (mettre true pour afficher, false pour masquer)
    enabledIcons: {
        facebook: true,      // Afficher Facebook
        instagram: true,     // Afficher Instagram
        tiktok: false,        // Afficher TikTok
        whatsapp: true,      // Afficher WhatsApp
        telegram: false,      // Afficher Telegram
        linkedin: false,     // Afficher LinkedIn (mettre true pour l'activer)
        website: false,       // Afficher Site Web
        maps: true,          // Afficher Maps
        phone: true,         // Afficher Téléphone
        snapchat: false,      // Afficher Snapchat
        email: false,         // Afficher Email
    },
    
};



























// Ne pas modifier ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profileConfig;
} else {
    window.profileConfig = profileConfig;
}

