import HeroSection from '@/components/HeroSection'
import FeatureSection from '@/components/FeatureSection'
import VideoSection from '@/components/VideoSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Video 1 – S&S Dining Story */}
      <VideoSection
        src="https://video.wixstatic.com/video/d0f8bb_ab9c55fcf44441b3ad610af77c1ba6ee/1080p/mp4/file.mp4"
        poster="https://static.wixstatic.com/media/d0f8bb_ab9c55fcf44441b3ad610af77c1ba6eef001.jpg"
        height="571px"
      />

      {/* Video 2 – Full Story */}
      <VideoSection
        src="https://video.wixstatic.com/video/d0f8bb_f605e17b04ec4d29830b7b5fc868ce7f/1080p/mp4/file.mp4"
        poster="https://static.wixstatic.com/media/d0f8bb_f605e17b04ec4d29830b7b5fc868ce7ff001.jpg"
        height="863px"
      />

      {/* Section 1: Thursday Burger BOGO */}
      <FeatureSection
        title="Thursday Burger Bogo Deal"
        description="Every Thursday at Salt & Steak, enjoy our juicy, handcrafted burgers with a deal you can't resist — buy one and get another absolutely free! Packed with bold flavors and made fresh to order, it's the perfect excuse to bring a friend or double up on your favorite burger. Don't miss out on this weekly feast!"
        imageSrc="https://static.wixstatic.com/media/32e4b5_26952d1a48b54e98a00a1e9b05037467~mv2.png/v1/fill/w_804,h_596,al_c,lg_1,q_90,enc_avif,quality_auto/Burger%20Deal%20Horizontal.png"
        imageAlt="Thursday Burger BOGO Deal"
        imagePosition="right"
      />

      {/* Section 2: Culinary Excellence */}
      <FeatureSection
        title="Culinary Excellence"
        description="We take pride in serving the finest cuts of certified halal beef, lamb, and chicken, expertly seasoned and grilled to perfection. Our chefs blend traditional steakhouse techniques with innovative flavors, creating dishes that tantalize the taste buds and leave a lasting impression."
        imageSrc="https://static.wixstatic.com/media/d0f8bb_6fe34e81b6044a8586355eb64b3b2e8a~mv2.jpg/v1/fill/w_804,h_571,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC08184_JPG.jpg"
        imageAlt="Steak on the Grill — Culinary Excellence"
        imagePosition="left"
      />

      {/* Section 3: Pasta Fiesta Wednesday */}
      <FeatureSection
        title="Pasta Fiesta Wednesday $15.99"
        description="Pasta lovers, this one's for you! Dive into a night of twirling, swirling, and savouring our freshly prepared pasta creations. Made with top-quality ingredients and paired with bold, house-made sauces, every dish bursts with flavour. From indulgent, creamy Alfredo to tangy Bolognese — Pasta Night is the perfect midweek escape!"
        imageSrc="https://static.wixstatic.com/media/32e4b5_e9cfc8579b03456e800d215421706ec4f000.jpg/v1/fill/w_804,h_596,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/32e4b5_e9cfc8579b03456e800d215421706ec4f000.jpg"
        imageAlt="Pasta Night Every Wednesday"
        imagePosition="right"
      />

      {/* Section 4: Weekend Brunch */}
      <FeatureSection
        title="Weekend Brunch"
        subtitle="WEEKEND BRUNCH"
        description="Join us for the ultimate Salt & Steak Brunch – a celebration of hearty flavours and fresh delights! Indulge in our signature Benedicts with rich, creamy hollandaise, homemade fruit jams, fluffy omelettes filled with your favourite ingredients, and golden pancakes made to perfection."
        imageSrc="https://static.wixstatic.com/media/d0f8bb_8e3f275063e14e7a947be6edf1bc2f08~mv2.jpg/v1/fill/w_804,h_571,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC07178_JPG.jpg"
        imageAlt="Weekend Brunch at Salt & Steak"
        imagePosition="left"
      />

      {/* Section 5: Happy Hour Steak */}
      <FeatureSection
        title="Happy Hour Steak $35"
        description="Experience the exceptional flavor of our New York Strip Steak, crafted from 100% grass-fed, locally sourced BC beef. Raised sustainably on lush pastures, this steak boasts a rich, natural taste and tender texture. Perfectly seasoned and grilled to your liking. Available during Happy Hour!"
        imageSrc="https://static.wixstatic.com/media/d0f8bb_a729a529f55843e988481556947e80d5~mv2.jpg/v1/fill/w_804,h_571,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC08636_JPG.jpg"
        imageAlt="Happy Hour New York Strip Steak"
        imagePosition="right"
      />

      {/* Section 6: Yemeni Lamb Mandi */}
      <FeatureSection
        title="Yemeni Lamb, Chicken Mandi"
        description="Experience the rich flavours of Arabia with our signature Lamb and Chicken Mandi — tender halal meats slow-cooked to perfection and served over fragrant saffron basmati rice. Paired with our house-made Yemeni tomato hot sauce, each bite offers a smoky, authentic Middle Eastern taste."
        imageSrc="https://static.wixstatic.com/media/32e4b5_5bc485bf31b14f34bc2e45ef646d06f5~mv2.jpg/v1/fill/w_804,h_571,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC01297.jpg"
        imageAlt="Yemeni Lamb and Chicken Mandi"
        imagePosition="left"
      />

      {/* Section 7: 2025 Award */}
      <FeatureSection
        title="Awarded Best Halal Fine Dining for 2025"
        description="We are deeply honored to accept the 2025 award for the Best Halal Fine Dining Restaurant in Vancouver and its surrounding areas. This recognition reflects our commitment to excellence in culinary arts. We are grateful to our dedicated team and cherished customers."
        imageSrc="https://static.wixstatic.com/media/32e4b5_6e22b5f2f83045709242d58f8cb9bab7~mv2.jpeg/v1/crop/x_0,y_0,w_5480,h_4128/fill/w_804,h_596,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2025-best-halal-award.jpeg"
        imageAlt="Best Halal Fine Dining 2025 Award"
        imagePosition="right"
      />
    </>
  )
}
