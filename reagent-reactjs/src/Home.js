import React, { Component } from "React";

class Home extends Component {
    render() {
        return([<p>Please select an option from below:</p>,
            <div class="support-squares-container">
                <section class="support-square">
                    <a href="auto-fix-tools.html">
                        <i class="fas fa-wrench"></i>
                        <h3>Autofix Tools</h3>
                    </a>
                </section>
                <section class="support-square">
                    <a href="submit-ticket.html">
                        <i class="fas fa-newspaper"></i>
                        <h3>Submit Ticket</h3>
                    </a>
                </section>
                <section class="support-square">
                    <a href="quickFix-tutorials.html">
                        <i class="fas fa-book"></i>
                        <h3>QuickFix Tutorials</h3>
                    </a>
                </section>
                <section class="support-square">
                    <a href="helpdesk.html">
                        <i class="fas fa-phone"></i>
                        <h3>Call Helpdesk</h3>
                    </a>
                </section>
                <section class="support-square">
                    <a href="#">
                        <i class="fas fa-bullseye"></i>
                        <h3>Staff Portal</h3>
                    </a>
                </section>
                <section class="support-square">
                    <a href="#">
                        <i class="fas fa-bullhorn"></i>
                        <h3>Announcements</h3>
                    </a>
                </section>
                </div>]
            );
    }
}