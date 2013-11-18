module.exports = function(grunt) {
	grunt.registerMultiTask('csstojavascript', 'Convert CSS file to JavaScript file', function() {
		//var opts = this.options();

		this.files.forEach(function(f) {
			grunt.log.writeln('got a file!');
			/*var ret = f.src.map(function(srcFile) {
				var result = task(grunt.file.read(srcFile), opts);
				grunt.log.writeln("Removed " + result.count + " logging statements from " + srcFile);
				return result.src;
			}).join("");

			grunt.file.write(f.dest, ret);*/
		});
	});
};
