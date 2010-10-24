
describe('Complex', function(){

	it('should create a complex number', function(){
		var num = new Complex(1, 2);
		expect(num.real).toEqual(1);
		expect(num.im).toEqual(2);
	});

	it('should parse a string into a complex number', function(){
		expect(new Complex('3+4i').toString()).toEqual('3+4i');
		expect(new Complex('3-4i').toString()).toEqual('3-4i');
		expect(new Complex('3+4j').toString()).toEqual('3+4i');
		expect(new Complex('5').toString()).toEqual('5');
		expect(new Complex('1+i').toString()).toEqual('1+i');
		expect(new Complex(1, -1).toString()).toEqual('1-i');
		expect(new Complex(0, 0).toString()).toEqual('0');
	});

	it('should calculate the magnitude of the number', function(){
		expect(new Complex(3, 4).magnitude()).toEqual(5);
		expect(new Complex(3, 4).abs()).toEqual(5);
	});

	it('should calculate the angle between the real and the im vectors', function(){
		expect(new Complex(1, 1).angle()).toEqual(Math.PI / 4);
		expect(new Complex(1, 0.5 * Math.sqrt(4 / 3)).angle()).toEqual(Math.PI / 6);
		expect(new Complex(1, 0.5 * Math.sqrt(4 / 3)).arg()).toEqual(Math.PI / 6);
	});

	it('should return the conjungate', function(){
		expect(new Complex(1, 3).conjungate().toString()).toEqual('1-3i');
		expect(new Complex(1, 3).conj().toString()).toEqual('1-3i');
	});

	it('should multiply a complex number', function(){
		expect(new Complex(1, 4).multiply(3).toString()).toEqual('3+12i');
		expect(new Complex(1, 4).mult(3).toString()).toEqual('3+12i');
	});

	it('should multiply two complex numbers', function(){
		var n = new Complex(1, 4).multiply('3+2i');
		expect(n.toString()).toEqual('-5+14i');
	});

	it('should devide a complex number by a real number', function(){
		expect(new Complex('4+16i').devide(4) + '').toEqual('1+4i');
		expect(new Complex('4+16i').dev(4) + '').toEqual('1+4i');
	});

	it('should devide a complex number by another number', function(){
		expect(new Complex('2+8i').devide(new Complex(1, 2)) + '').toEqual('3.6+0.8i');
	});

	it('should add two complex numbers', function(){
		var n = new Complex(1, 2).add('4+6i');
		expect(n.toString()).toEqual('5+8i');
	});

	it('should substract two complex numbers', function(){
		var n = new Complex(5, 8);
		expect(n.clone().substract('4+6i').toString()).toEqual('1+2i');
		expect(n.clone().sub('4+6i').toString()).toEqual('1+2i');
	});

	it('should z^n, where z is complex and n is real', function(){
		expect(new Complex(1, 2).pow(2).toPrecision(1) + '').toEqual('-3+4i');
	});

	it('should z^w, where z and w are complex', function(){
		expect(new Complex(1, 2).pow(new Complex(3, 4)).toPrecision(10) + '').toEqual('0.1290095941+0.03392409291i');
	});

	it('should take the square root of the complex number', function(){
		var n = new Complex('1+4i').sqrt();
		expect(n.toString()).toEqual('1.6004851804402407+1.2496210676876531i');
	});

	it('it should take the natural logarithm', function(){
		expect(new Complex('4+3i').log() + '').toEqual('1.6094379124341003+0.6435011087932844i');
	});

	it('it should return the exponential', function(){
		expect(new Complex('4+3i').exp() + '').toEqual('-54.051758861078156+7.704891372731154i');
	});

});