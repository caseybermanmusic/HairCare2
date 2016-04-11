var app = angular.module('assign_8', []);



app.controller('myController' , ['$scope' , function($scope) {

	$scope.mainvis = true;
	$scope.secondvis = false;
	$scope.optionvis = false;
	$scope.selectionsvis = false;
	$scope.laservis = false;
	$scope.scalpvis = false;
	$scope.wigsvis = false;
	$scope.hairvis = false;


$scope.main = [
			{
				head: 'What Hair Loss Solution is the Right For Me?',
				para: 'Discover what hair loss solutions are best for your specific type of hair loss',
				submit: 'GET STARTED NOW'
			}
		];

$scope.second = [
			{
				head: 'Are you a man or woman?',
				button_1: 'Man',
				button_2: 'Woman',
				submit: 'Submit'
			}
];

$scope.option = [
			{
				head: 'What statemen best describes your hair loss?',
				button_1: 'I am just beginning to thin',
				button_2: 'I am visibly thinning and can see my scalp',
				button_3: 'I have extensive hair loss',
				button_4: 'I have full head of hair but my hair is very fine',
				button_5: 'I have hair loss in my family and want to hold on to what I have',
				button_6: 'I have hair loss due to medical treatment such as Chemotherapy'
			}

];

$scope.selections = [
			{
				head: 'Base on your answers, these treatment options are best suited to your needs:',
				button_1: 'Laser Hair Therapy',
				button_2: 'Hair Enchantment',
				button_3: 'Scalp Wellness',
				button_4: 'Revive Procare',
				button_5: 'Wigs and medical hair loss',
			}
];

$scope.laser = [
			{
				head: 'Laser Hair Therapy For Men & Women',
				para: 'Laser Hair Therapy is an effective drug free and non-surgical treatment designed for men and women experiencing early to moderate stages of hair loss. Laser light energy is used to stimulate hair growth through an FDA approved cool laser device. The laser stimulates healthy hair re-growth, stops the progression of hair loss, increases blood supply to the scalp, and strengthens the integrity of the hair. The treatments can also aid in healing certain scalp conditions, and is recommended for post-operative healing in newly transplanted hair.',
				para_2: 'Laser treatments are recommended to be performed a few times per week for 30 minutes in conjunction with products and scalp treatments. Clients have seen more hair growth  after a few months as well as maintaining their existing hair. We offer a complimentary consultation and scalp analysis to see if you are a candidate for laser hair treatments. We also offer at home laser equipment and treatment products.',
				image: '../images/laser.jpg'
			}
];

$scope.scalp = [
			{
				head: 'Scalp Wellness',
				para: 'Healthy hair begins with a healthy scalp. Seasonally, due to environmental  changes and the internal composition of the body the scalp is affected. Many clients suffering from psoriasis, dandruff, oiliness, dryness and sensitivity can benefit from scalp treatments',
				para_2: 'We have created a solution to increase volume, stop excessive hair loss and restore your scalp health. Our scalp treatments and home care systems are customized to each client’s personal needs. We are happy to style and cut your hair after your scalp treatment leaving your hair feeling refreshed and rejuvenated.',
				image: '../images/scalp_wellness.jpg',
			}

];

$scope.wigs = [
			{
				head: 'Wigs & Medical hair loss',
				para: 'Wigs can be a beautiful option when you are experiencing temporary hair loss due to any medical condition. Hair and Scalp Wellness is committed to helping you through the entire process from selection, maintaining, and customizing your wig.',
				para_2: 'Our styles are in line with the latest trends in fashion as well as being light and comfortable on the scalp. We will assist you in picking a length and color that compliments your face and meets your specific lifestyle needs. We will support you through the hair loss process with tender care and experienced advice. We will teach you how to care for your wig and assist you with any additional accessories you will need such as sleeping caps, fashionable scarves, skin care and makeup to help you look and feel your best. Rest assured a Hair and Scalp Wellness associate will be with you every step of the way.',
				image: '../images/wigs.jpg',
			}

];

$scope.hair = [
			{
				head: 'Hair Enchantment For Men & Women',
				para: 'Hair enhancement is an option that integrates real human hair using a process that is non-surgical and non-invasive. Clients who have male pattern baldness, or women who have lost a substantial amount of hair due to genetics or health conditions causing permanent baldness, can benefit from our hair enhancement services.',
				para_2: 'The grafting procedure is virtually undetectable. The style, color and texture is matched to the client’s existing hair and blended to create a fuller and thicker appearance. We have helped change thousands of client’s lives over the past 48 years with our hair enhancement services.',
				image: '../images/hair1.jpg',
				image2: '../images/hair2.jpg',

			}

];

	$scope.dummy = [
		{
		bool: false,
		name: "Casey",
		name2: "Jayson",
		name3: "Scarlett"
	},
	{
		bool: false,
		name: "Melissa",
		name2: "Brian",
		name3: "Natan"
	}];

	$scope.changebool = function(obj) {
		obj.bool = !obj.bool;
		console.log(obj.bool);
	};


$scope.starts1 = function () {
	$scope.mainvis = false;
};


}]);
