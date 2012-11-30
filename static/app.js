function Task(data) {
    this.id = ko.observable(data.id);
    this.title = ko.observable(data.title);
    this.description = ko.observable(data.description);
}

function TaskListViewModel() {
    var self = this;
    self.tasks = ko.observableArray([]);
    self.newTaskTitle = ko.observable();
    self.newTaskDesc = ko.observable();

    self.addTask = function() {
	self.save();
	self.newTaskTitle("");
	self.newTaskDesc("");
    };

    $.getJSON('/tasks', function(taskModels) {
	var t = $.map(taskModels.tasks, function(item) {
	    return new Task(item);
	});
	self.tasks(t);
    });

    self.save = function() {
	return $.ajax({
	    url: '/tasks/new',
	    contentType: 'application/json',
	    type: 'POST',
	    data: JSON.stringify({
		'title': self.newTaskTitle(),
		'description': self.newTaskDesc()
	    }),
	    success: function(data) {
		console.log("Pushing to tasks array");
		self.tasks.push(new Task({ title: data.title, description: data.description, id: data.id}));
		return;
	    },
	    error: function() {
		return console.log("Failed");
	    }
	});
    };
}

ko.applyBindings(new TaskListViewModel());
