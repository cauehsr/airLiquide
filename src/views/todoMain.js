import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator, Button} from 'react-native';
import {connect} from 'react-redux';
import {loadingTask} from 'airLiquide/src/store/actions/actions';
import SelectList from 'airLiquide/src/components/SelectList';

class TodoMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.todo.listTodo,
    };
  }

  componentDidMount() {
    this.props.loadingTask();
  }

  onPressCheck = (index) => {
    this.setState((item) => {
      const dataList = [...item.dataList];
      if (dataList[index].check) {
        return dataList[index].check = false;
      } else {
        return dataList[index].check = true;
      }
    });
  };

  onNewTask = () => {
    this.setState({
      dataList: this.props.todo.listTodo,
    });
    this.props.loadingTask();
  };

  render() {
    const {dataList} = this.state;
    return (
      <View style={styles.containerList}>
        {/* Loading */}
        {this.props.todo.loading && ( <ActivityIndicator animating={true} /> )}
        {/* Loading */}

          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataList}
            renderItem={({item: {name, check}, index}) => (
              <SelectList
                checked={check}
                key={index}
                name={name}
                onPress={() => this.onPressCheck(index)}
              />
            )}
          />
        <Button
          title="Novas tasks"
          onPress={() => this.onNewTask()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    marginTop: 70,
    marginBottom: 40,
  },
});

const mapStateToProps = state => ({ todo: state.todo })

const mapDispatchToProps = dispatch => ({ loadingTask: () => dispatch(loadingTask()) })

export default connect(mapStateToProps, mapDispatchToProps)(TodoMain);
