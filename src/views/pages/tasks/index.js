import {List} from 'immutable';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import {getNotification, notificationActions} from 'src/core/notification';
import {getTaskFilter, getVisibleTasks, tasksActions} from 'src/core/tasks';
import {userActions} from 'src/core/users';
import {gameActions} from 'src/core/games';
import { authActions, getAuth } from 'src/core/auth';
import Notification from '../../components/notification';
import TaskFilters from '../../components/task-filters';
import TaskForm from '../../components/task-form';
import TaskList from '../../components/task-list';

import CreateGame from '../../components/create-game';
import CurrentUser from '../../components/current-user';

import UserForm from '../../components/user-form';


export class Tasks extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    createGame: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    dismissNotification: PropTypes.func.isRequired,
    filterTasks: PropTypes.func.isRequired,
    filterType: PropTypes.string.isRequired,
    loadTasks: PropTypes.func.isRequired,
    loadUsers: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
    tasks: PropTypes.instanceOf(List).isRequired,
    undeleteTask: PropTypes.func.isRequired,
    unloadTasks: PropTypes.func.isRequired,
    unloadUsers: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.loadTasks();
    this.props.loadUsers();
    this.props.filterTasks(this.props.location.query.filter);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query.filter !== this.props.location.query.filter) {
      this.props.filterTasks(nextProps.location.query.filter);
    }
  }

  componentWillUnmount() {
    this.props.unloadTasks();
    this.props.unloadUsers();
  }

  renderNotification() {
    const {notification} = this.props;
    return (
      <Notification
        action={this.props.undeleteTask}
        actionLabel={notification.actionLabel}
        dismiss={this.props.dismissNotification}
        display={notification.display}
        message={notification.message}
      />
    );
  }

  render() {
    return (
      <div className="g-row">
        <div className="g-col">
          <CurrentUser auth={this.props.auth} />
        </div>
        <div className="g-col">
          <CreateGame
            auth={this.props.auth}
            createGame={this.props.createGame}
          />
        </div>

        <div className="g-col">
          <UserForm createUser={this.props.createUser} />
        </div>

        <div className="g-col">
          <TaskForm createTask={this.props.createTask} />
        </div>

        <div className="g-col">
          <TaskFilters filter={this.props.filterType} />
          <TaskList
            deleteTask={this.props.deleteTask}
            tasks={this.props.tasks}
            updateTask={this.props.updateTask}
          />
        </div>

        {this.props.notification.display ? this.renderNotification() : null}
      </div>
    );
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getNotification,
  getTaskFilter,
  getVisibleTasks,
  getAuth,
  (notification, filterType, tasks, auth) => ({
    notification,
    filterType,
    tasks,
    auth
  })
);


const mapDispatchToProps = Object.assign(
  {},
  tasksActions,
  userActions,
  authActions,
  gameActions,
  notificationActions
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
