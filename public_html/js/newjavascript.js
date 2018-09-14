/*
 * The MIT License
 *
 * Copyright 2018 Thierry Lavallée <thierry.lavallee at esko.com>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Instantiate the Parent project
var thisProject = API.getProject();
// Instantiate an array of child projects object
var childProjects = thisProject.getChildProjects();
// If there is a child, calculations are processed
if (childProjects.length > 0) {
    // Instantiate a counter
    var nbCompleted = 0;
    // Loop on every child
    for (var i = 0; i < childProjects.length; i++) {
        // Get an array of child projects object
        var childStatus = childProjects[i].getStatusName();
        // count if child is completed
        if (childStatus === "Completed") {
            nbCompleted++;
        }
    }
    // if all children are completed, push completed to the parent
    if (childProjects.length === nbCompleted) {
        thisProject.setStatusByName("Completed");
    }
}

